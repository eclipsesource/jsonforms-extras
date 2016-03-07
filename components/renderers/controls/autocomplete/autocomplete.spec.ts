///<reference path="../../../references.ts" />

describe('autocomplete renderer', () => {

    // load all necessary modules and templates
    beforeEach(module('jsonforms'));
    beforeEach(module('jsonforms.renderers.controls.autocomplete'));

    it("should render a labeled input field", inject(function ($rootScope, $compile) {
        var scope = $rootScope.$new();
        scope.schema = {
            "type": "object",
            "properties": {
                "occupation": {
                    "type": "string",
                }
            }
        };
        scope.data = { occupation: 'Artist'};
        scope.uiSchema = {
            "type": "Control",
            "label": "Occupation",
            "scope": { "$ref": "#/properties/occupation" },
            "suggestion": ["Accountant", "Engineer", "Freelancer", "Journalism", "Physician", "Student", "Teacher", "Other"]
        };
        var el = $compile('<jsonforms schema="schema" data="data" ui-schema="uiSchema">')(scope);
        scope.$digest();

        expect(el.find("label").text()).toEqual("Occupation");
    }));

    //TODO: implement checks
    it("should render suggestions", inject(function ($rootScope, $compile, $sniffer) {
        var scope = $rootScope.$new();
        scope.schema = {
            "type": "object",
            "properties": {
                "occupation": {
                    "type": "string",
                }
            }
        };
        scope.data = { occupation: 'Artist'};
        scope.uiSchema = {
            "type": "Control",
            "label": "Occupation",
            "scope": { "$ref": "#/properties/occupation" },
            "suggestion": ["Accountant", "Engineer", "Freelancer", "Journalism", "Physician", "Student", "Teacher", "Other"]
        };
        var el = $compile('<jsonforms schema="schema" data="data" ui-schema="uiSchema">')(scope);
        scope.$digest();

        var input = el.find('input');

        input.triggerHandler('click');
        input.val('Stu');
        input.triggerHandler('input');
        scope.$apply();
    }));
});