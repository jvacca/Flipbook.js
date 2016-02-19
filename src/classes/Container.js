/**
*   Container: Container objects can contain multiple display objects
*
*/


/**
 * @module Flipbook
 */

    
    // constructor:
    /**
     * Container objects can contain multiple display objects
     * @class Container
     * @extends DisplayObject
     * @constructor
    **/

    Flipbook.Container = function() {
        Flipbook.DisplayObject.call(this);

        // public properties:
        this.displayList = [];
    };

    Flipbook.Container.prototype = Object.create(Flipbook.DisplayObject.prototype);
    Flipbook.Container.prototype.constructor = Flipbook.Container;

    extend(Flipbook.Container.prototype, {

    	// public methods:

        /**
         * Add a child display object to the display list of this container
         *
         * @method addChild
         * @param {DisplayObject} childObj
         * @return {} none
         **/
        addChild: function(childObj) {
            var args = arguments.length;
            for (var i = 0; i < args; i++) {
                var child = arguments[i];
                child.parent = this;
                this.displayList.push(child);
                this.dispatchEvent(Flipbook.Events.Added);
            }
        },

        getChildIndexById: function(id) {
            var x;
            for (x=0; x<this.displayList.length; x++) {
                if (this.displayList[x].id == id) {
                    return x;
                }
            }
            return false;
        },

        removeChild: function(childObj) {
            var x = this.getChildIndexById(childObj.id);
            this.displayList.splice(x, 1);
            this.dispatchEvent(Flipbook.Events.Removed);
        },

        removeAllChildren: function() {
            this.displayList.splice(0, this.displayList.length);
            this.dispatchEvent(Flipbook.Events.Removed);
        },

        getNumChildren: function() {
            return this.displayList.length;
        },

        getChildByName: function(name) {
            var x;
            for (x=0; x<this.displayList.length; x++) {
                if (this.displayList[x].name == name) {
                    return this.displayList[x];
                }
            }
            return false;
        },

        swapChildren: function(child1, child2) {
            var x = getChildIndexById(child1.id);
            var y = getChildIndexById(child2.id);
            this.displayList[x] = child2;
            this.displayList[y] = child1;
        },

        contains: function(childObj) {
            if (this.getChildIndexById(childObj.id) !== false) {
                return true;
            }
            return false;
        },

        draw: function() {
            if (this.visible === false) return;
            var x = 0;
            for (x = 0; x < this.displayList.length; x++) {
                Flipbook.ctx.save();
                this.displayList[x].applyProperties();
                this.displayList[x].draw(Flipbook.ctx);
                Flipbook.ctx.restore();
            }
        },

        update: function() {
            this.dispatchEvent(Flipbook.Events.OnUpdate);
            Flipbook.ctx.setTransform(1, 0, 0, 1, 0, 0);
            Flipbook.ctx.clearRect(0, 0, Flipbook.canvas.width, Flipbook.canvas.height);
            this.draw();
        },

        clone: function() {
            return cloneProps(new Container(), this);
        }
    });

