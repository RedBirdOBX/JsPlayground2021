var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var AccessModifiers;
    (function (AccessModifiers) {
        var ClassA = /** @class */ (function () {
            function ClassA() {
                // fields
                // private readonly _field1: string = "foo";
                // private readonly _field2: string = "bar";
                this._field3 = "foobar";
                //properties
                this.Property1 = "I am Property1.";
            }
            return ClassA;
        }());
        var ClassB = /** @class */ (function (_super) {
            __extends(ClassB, _super);
            function ClassB() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // ClassB inhertits ClassA...it is called `extends` in ts. 
                // If you want to use any props or fields from the base class, ClassA, you need to protect it (if they are to be private & readonly).
                // Notice how this field can ONLY access a protected field from ClassA.
                // If you try to use one of the private ones, you will get an error.
                _this.Foobar = _this._field3;
                _this.Property2 = _this.Property1;
                return _this;
                // Doesn't work. Not protected.
                // Foo : string = this._field1;  <-- nope!!
            }
            return ClassB;
        }(ClassA));
        window.onload = function () {
            var classB = new ClassB();
            alert(classB.Foobar);
            alert(classB.Property2);
        };
    })(AccessModifiers = TypeScriptDemos.AccessModifiers || (TypeScriptDemos.AccessModifiers = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
