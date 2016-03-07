///<reference path="../../../references.ts" />

describe('Array renderer', () => {

    beforeEach(module('jsonforms'));
    beforeEach(module('jsonforms.renderers.controls.array.ui-grid'));

    it("should render a table based on ui-grid", inject(($rootScope, $compile) => {
        var scope = $rootScope.$new();
        scope.schema = {
            "type": "object",
            "properties": {
                "animals": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": { "type": "string"  },
                            "legs": { "type": "integer" }
                        }
                    }
                }
            }
        };

        // TODO: missing test: no columns definition given
        scope.uiSchema = {
            "type": "Control",
            "scope": { "$ref": "#/properties/animals" },
            "columns": [
                {
                    "scope": {
                        "$ref": "#/items/properties/name"
                    }
                },
                {
                    "scope": {
                        "$ref": "#/items/properties/legs"
                    }
                }
            ]
        };

        scope.data = [

        ];

        var el = $compile('<jsonforms schema="schema" ui-schema="uiSchema" data="data"/>')(scope);
        scope.$digest();
        expect(el.html()).toContain("ui-grid");
    }));

});