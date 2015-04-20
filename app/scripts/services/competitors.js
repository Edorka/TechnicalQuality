'use strict';

/**
 * @ngdoc service
 * @name technicalQualityApp.competitors
 * @description
 * # competitors
 * Service in the technicalQualityApp.
 */
angular.module('technicalQualityApp')
  .service('competitors', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this._list = [];
    this._lastId = 1;

    this.list = function(){
        return this._list;
    }
    this.add = function addCompetitor(newCompetitor){
        newCompetitor = newCompetitor || {}; 
        var newId = this._lastId++;
        this._list.push({
            id: newId,
            name: newCompetitor.name || 'Competitor  ' +  newId,
            surnames: newCompetitor.surnames || '',
            cathegorie: newCompetitor.cathegorie
        });
    }
    this.remove = function remove(id){
        var position = null; 
        var index = 0;
        while ( (position === null) && (index < this._list.length) ){
            var current = this._list[ index ];
            if ( current.id == id ){
                position = index;
                this._list.splice( position, 1/*element*/ );
            } else {
                index += 1;
            }
        }
    }  
  });
