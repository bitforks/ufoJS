define(
    [
        'graphicore',
        './AbstractPen',
        '../misc/transform'
    ],
    function(
        graphicore,
        AbstractPen,
        transform
    )
{
    var enhance = graphicore.enhance,
        Transform = transform.Transform;
    /**
     * Pen that transforms all coordinates using a Affine transformation,
     * and passes them to another pen.
     */
     
    /*constructor*/
    /**
     * The 'outPen' argument is another pen object. It will receive the
     * transformed coordinates. The 'transformation' argument can either
     * be a six-element Array, or a tools.misc.transform.Transform object.
     */
    function TransformPen(outPen, transformation) {
        if( transformation instanceof Array)
            transformation = new Transform(transformation);
        this._transformation = transformation;
        this._transformPoint = function(pt) {
            return transformation.transformPoint(pt);
        }
        this._outPen = outPen;
        this._stack = [];
    };

    /*inheritance*/
    TransformPen.prototype = new AbstractPen;

    /*definition*/
    enhance(TransformPen, {
        moveTo: function(pt)
        {
            this._outPen.moveTo(this._transformPoint(pt));
        },
        lineTo: function(pt)
        {
            this._outPen.lineTo(this._transformPoint(pt));
        },
        curveTo: function(/* *points */)
        {
            var points = [].slice.call(arguments);//transform arguments to an array
            this._outPen.curveTo.apply(this._outPen, this._transformPoints(points));
        },
        qCurveTo: function (/* *points */)
        {
            var points = [].slice.call(arguments);//transform arguments to an array
            if (points[points.length -1] === null) {
                points = this._transformPoints(points.slice(0, -1));
                points.push(null);
            } else {
                points = this._transformPoints(points);
            }
            this._outPen.qCurveTo.apply(this._outPen, points);
        },
        _transformPoints: function(points)
        {
            return points.map(this._transformPoint);
        },
        closePath: function()
        {
            this._outPen.closePath();
        },
        addComponent: function(glyphName, transformation)
        {
            transformation = this._transformation.transform(transformation);
            this._outPen.addComponent(glyphName, transformation);
        }
    });

    return TransformPen;
});