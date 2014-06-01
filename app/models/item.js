export default DS.Model.extend({
    text:     DS.attr('string'),
    color:    DS.attr('string'),
    smallNum: DS.attr('number'),
    shown: true
});