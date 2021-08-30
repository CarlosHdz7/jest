const bookmarkMock = {
  uid: 'character0',
  type: 'character',
  redirect: 'characters',
  id: 0,
  name: 'test',
  hidden: false,
};

const bookmarksMock = [{
  uid: 'character0',
  type: 'character',
  redirect: 'characters',
  id: 0,
  name: 'test',
  hidden: false,
},
{
  uid: 'character1',
  type: 'character',
  redirect: 'characters',
  id: 1,
  name: 'test 2',
  hidden: false,
}];

const bookmarksMockApi = [{
  uid: 'character1009144', type: 'character', redirect: 'characters', id: 1009144, name: 'A.I.M.', hidden: false,
}, {
  uid: 'character1011334', type: 'character', redirect: 'characters', id: 1011334, name: '3-D Man', hidden: true,
}, {
  uid: 'comic82967', type: 'comic', redirect: 'comics', id: 82967, name: 'Marvel Previews (2017)', hidden: true,
}, {
  uid: 'comic82965', type: 'comic', redirect: 'comics', id: 82965, name: 'Marvel Previews (2017)', hidden: true,
}, {
  uid: 'comic1689', type: 'comic', redirect: 'comics', id: 1689, name: 'Official Handbook of the Marvel Universe (2004) #10 (MARVEL KNIGHTS)', hidden: false,
}, {
  uid: 'story7', type: 'story', redirect: 'stories', id: 7, name: 'Investigating the murder of a teenage girl, Cage suddenly learns that a three-way gang war is under way for control of the turf', hidden: true,
}];

export { bookmarkMock, bookmarksMock, bookmarksMockApi };
