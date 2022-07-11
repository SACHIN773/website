const Sort = (filteredEvents, issortAsc = false) => {
  return filteredEvents.sort((a, b) => {
    if (issortAsc)
      return a.eventName > b.eventName ? 1 : b.eventName > a.eventName ? -1 : 0;
    else
      return a.eventName > b.eventName ? -1 : b.eventName > a.eventName ? 1 : 0;
  });
};
export default Sort;
