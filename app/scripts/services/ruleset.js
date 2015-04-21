'use strict';

/**
 * @ngdoc service
 * @name technicalQualityApp.ruleSet
 * @description
 * # ruleSet
 * Provider in the technicalQualityApp.
 */
angular.module('technicalQualityApp')
  .provider('ruleSet', function () {
    console.log('ruleset build');
    // Private variables
    var cathegories = {
        'changquan': 'Chang Quan',
        'nanquan': 'Nan Quan',
    };
    var deductions = {};
    deductions['changquan'] = {
		'balances': {
			'img' : 'balances',
			'movements': [
				{
					'id': 10,
					'title': 'Bring Leg to Head',
					'img': 'movement-cq-10',
					'errors': [{
						'id':'10a',
						'title': 'Supporting leg bent',
						'image': 'movement-cq-10a' },
						{
						'id':'10b',
						'title': 'Raised leg bent',
						'image': 'movement-cq-10b' }
					]
				},{
					'id': 11,
					'title': 'Back Kick and hold leg',
					'img': 'movement-cq-11',
					'errors': [{
						'id':'11a',
						'title': 'Supporting leg bent',
						'image': 'movement-cq-11a' },
						{
						'id':'11b',
						'title': 'Upper body over 45 degrees',
						'image': 'movement-cq-11b' }
					]
				},{
					'id': 12,
					'title': 'Yangshen Pingheng Backward balance',
					'img': 'movement-cq-12',
					'errors': [{
						'id':'12a',
						'title': 'Raised leg below horizontal',
						'image': 'movement-cq-12a' }
					]
				},{
					'id': 13,
					'title': 'Shizi Pingheng balance with arms spread',
					'img': 'movement-cq-13',
					'errors': [{
						'id':'13a',
						'title': 'Upper body below horizontal level',
						'image': 'movement-cq-13a' }
					]
				},{
					'id': 14,
					'title': 'Cross leg balance',
					'img': 'movement-cq-14',
					'errors': [{
						'id':'14a',
						'title': 'Thigh of supporting leg not near horinzontal level',
						'image': 'movement-cq-14a' }
					]
				}
			]
		},
		'leg techniques': {
			'img' : 'leg-techniques',
			'movements': [
				{
					'id': 20,
					'title': 'Qiansaotui QST \n Front sweep',
					'img': 'movement-cq-20',
					'errors': [{
						'id':'20a',
						'title': 'Thigh of supporting leg not near horinzontal level',
						'image': 'movement-cq-20a' },
						{
						'id':'20b',
						'title': 'Sole of sweeping foot off carpet',
						'image': 'movement-cq-20b' },
						{
						'id':'20c',
						'title': 'Sweeping leg bent',
						'image': 'movement-cq-20c' }
					]
				},{
					'id': 21,
					'title': 'Huosaotui HST\nBack Sweep',
					'img': 'movement-cq-21',
					'errors': [
						{'id':'21a',
						'title': 'Sole of sweeping foot off carpet',
						'image': 'movement-cq-21a' },
						{
						'id':'21b',
						'title': 'Sweeping leg bent',
						'image': 'movement-cq-21b' }
					]
				},{
					'id': 22,
					'title': 'Diecha\n Landing from split',
					'img': 'movement-cq-22',
					'errors': [{
						'id':'22a',
						'title': 'Toes of front foot touches floor',
						'image': 'movement-cq-22a' },{
						'id':'22b',
						'title': 'Legs not aligned',
						'image': 'movement-cq-22b' }
					]
				},{
					'id': 23,
					'title': 'Shizi Pingheng balance with arms spread',
					'img': 'movement-cq-23',
					'errors': [{
						'id':'23a',
						'title': 'Upper body below horizontal level',
						'image': 'movement-cq-23a' }]
				}
			]
		},
		'Jumps': {},
		'Stances': {},
		'Apparatus': {}
    };

    // Private constructor
    function RuleSet() {

      this.getCathegorie = function(code) {
        return cathegories[code];
      }
      this.getCathegories = function() {
        var result = this._cathegoryArray;
        if ( !result ){
            result = [];
            Object.keys(cathegories).map(function(value, index) {
                result.push({
                    value: value,
                    label: cathegories[value] 
                });
            });
            this._cathegoryArray = result;
        }
        return result;
      };
      this.getDeductions = function (cathegorie) {
        return deductions[cathegorie];
      };
    }

    /* Public API for configuration
    this.setSalutation = function (s) {
      salutation = s;
    };*/

    // Method for instantiating
    this.$get = function () {
      return new RuleSet();
    };
  });
