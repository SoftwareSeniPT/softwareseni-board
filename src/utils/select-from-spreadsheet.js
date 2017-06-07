import getNumber from './get-number';

class SelectFromSpreadsheet {
  constructor(link) {
    this.link = link;
  }
  selectSheet(sheetNumber) {
    const regex = /(https:\/\/spreadsheets\.google\.com\/feeds\/list\/[a-zA-Z0-9_-]+)\/\d\/(public\/values)/;
    this.link = this.link.replace(regex, `$1/${sheetNumber}/$2`);
    return this;
  }
  selectByName(name, number = true) {
    return fetch(this.link)
      .then((response) => response.json())
      .then((response) => response.feed.entry)
      .then((response) => response.filter((res) => res.title.$t === name))
      .then((response) => {
        if (response.length) {
          const data = response[0].content.$t;
          const dataExplode = data.split(':');
          if (number) {
            return getNumber(dataExplode[1]);
          }
          return dataExplode[1];
        }
        return 0;
      });
  }
  getTotalNumber() {
    return fetch(this.link)
      .then((response) => response.json())
      .then((response) => response.feed.entry)
      .then((response) => response.map((res) => getNumber(res.content.$t)))
      .then((response) => response.map((res) => (isNaN(res) ? 0 : res)))
      .then((response) => response.reduce((a, b) => (a + b), 0));
  }
  getAverage() {
    return fetch(this.link)
      .then((response) => response.json())
      .then((response) => response.feed.entry)
      .then((response) => response.map((res) => getNumber(res.content.$t)))
      .then((response) => {
        const total = response.reduce((a, b) => (a + b), 0);
        const length = response.length;
        const average = total / length;
        return average;
      });
  }
  getList(sort = false) {
    return fetch(this.link)
      .then((response) => response.json())
      .then((response) => response.feed.entry)
      .then((response) => {
        const resultArray = response.map((res) => ({
          title: res.title.$t,
          number: getNumber(res.content.$t),
        }));
        // Perform sorting
        if (sort) {
          const compare = (a, b) => {
            if (a.number < b.number) return 1;
            if (a.number > b.number) return -1;
            return 0;
          };
          resultArray.sort(compare);
        }
        return resultArray;
      });
  }
  getSingleList(max = 2) {
    return fetch(this.link)
      .then((response) => response.json())
      .then((response) => response.feed.entry)
      .then((response) => {
        const resultArray = response.map((res) => ({
          text: res.title.$t,
          updated: res.updated.$t,
        }));
        return resultArray
          .map((e, i, a) => a[(a.length - 1) - i])
          .filter((arr, key) => (key < max));
      });
  }
  getAllList() {
    return fetch(this.link)
      .then((response) => response.json())
      .then((response) => response.feed.entry)
      .then((response) => response.map((res) => {
        const content = res.content.$t;
        const contentArray = content.split(', ');

        if (!contentArray.length || (contentArray.length === 1 && contentArray[0] === '')) {
          return null;
        }

        const regex = /(.*?):\s(.*)/g;
        const contentObject = {};
        contentArray.map((c) => {
          const regexResult = regex.exec(c);
          contentObject[regexResult[1]] = regexResult[2];
          regex.lastIndex = 0;
        });
        return {
          title: res.title.$t,
          content: contentObject,
        };
      }).filter((res) => (res)));
  }
}

export default SelectFromSpreadsheet;
