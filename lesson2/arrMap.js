var dataItems = [
    { AreaID: 7, AreaName: 'APAC', SubsidiaryId: 67, SubsidiaryName: 'Phillippines' },
    { AreaID: 7, AreaName: 'APAC', SubsidiaryId: 67, SubsidiaryName: 'Singapore' },
    { AreaID: 7, AreaName: 'APAC', SubsidiaryId: 67, SubsidiaryName: 'Australia' },
    { AreaID: 7, AreaName: 'APAC', SubsidiaryId: 67, SubsidiaryName: 'New Zealand' },
    { AreaID: 7, AreaName: 'APAC', SubsidiaryId: 67, SubsidiaryName: 'Vietnam' },
    { AreaID: 7, AreaName: 'APAC', SubsidiaryId: 67, SubsidiaryName: 'Bangladesh' },
    { AreaID: 9, AreaName: 'United States', SubsidiaryId: 1, SubsidiaryName: 'United States' },
    { AreaID: 10, AreaName: 'Germany', SubsidiaryId: 15, SubsidiaryName: 'Germany' },
    { AreaID: 11, AreaName: 'France', SubsidiaryId: 32, SubsidiaryName: 'France' },
    { AreaID: 12, AreaName: 'UK', SubsidiaryId: 31, SubsidiaryName: 'United Kingdom' },
    { AreaID: 13, AreaName: 'Japan', SubsidiaryId: 40, SubsidiaryName: 'Japan' },
    { AreaID: 14, AreaName: 'Greater China', SubsidiaryId: 42, SubsidiaryName: 'Taiwan' },
    { AreaID: 14, AreaName: 'Greater China', SubsidiaryId: 36, SubsidiaryName: 'China' },
    { AreaID: 14, AreaName: 'Greater China', SubsidiaryId: 37, SubsidiaryName: 'Hong Kong' },
    { AreaID: 14, AreaName: 'Greater China', SubsidiaryId: -14, SubsidiaryName: 'Greater China Sub something' }
   ];
  
  
  var groupedAreas = [];
  dataItems.map(function(d) {
    if(groupedAreas.filter(function(item, i) {
     return item.areaName === d.AreaName; 
    }).length === 0) {
      groupedAreas.push({ areaName: d.AreaName, subsidiaries:  dataItems.filter(function(r) { return r.AreaName === d.AreaName; }) });
    }
  });
 console.log(JSON.stringify(groupedAreas))