import { GET_ALL_EVENTS } from "../actions/types";

const initialState = {
  vEvents : [
      {
          'category': ['Music', 'Entertaiment'],
          'title': "Eli At Home Concert",
          'presentor': 'Eli Love',
          'date': "25",
          'month': "May",
          'time': "18:00 PST",
          'banner':"https://img.freepik.com/free-vector/modern-music-event-poster-template_1361-1292.jpg?size=626&ext=jpg",
          'description': "Nullam aliquam felis ut elit rutrum mattis. Curabitur arcu eros, imperdiet id gravida sit amet, pulvinar non ex. Cras ac ligulaeget sapien suscipit luctus non a risus."
      },
      {
        'category': ['Music', 'Entertaiment'],
        'title': "Eli At Home Concert",
        'presentor': 'Eli Love',
        'date': "25",
        'month': "May",
        'time': "18:00 PST",
        'banner':"https://img.freepik.com/free-vector/modern-music-event-poster-template_1361-1292.jpg?size=626&ext=jpg",
        'description': "Nullam aliquam felis ut elit rutrum mattis. Curabitur arcu eros, imperdiet id gravida sit amet, pulvinar non ex. Cras ac ligulaeget sapien suscipit luctus non a risus."
    }
  ]
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        events: payload,
      };
    default:
      return state;
  }
}
