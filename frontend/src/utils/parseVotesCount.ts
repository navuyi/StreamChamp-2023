export const parseVoteCount = (value:number) => {
    if (value >= 1000 && value < 1000000) {
        return (value / 1000).toFixed(1) + "k";
      } else if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + "m";
      } else {
        return value.toString();
      }
}