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
  selectByName(name) {
    return fetch(this.link)
      .then((response) => response.json())
      .then((response) => response.feed.entry)
      .then((response) => response.filter((res) => res.title.$t === name))
      .then((response) => {
        if (response.length) {
          return getNumber(response[0].content.$t);
        }
        return 0;
      })
      .then((response) => parseInt(response, 10));
  }
  getTotalNumber() {
    return fetch(this.link)
      .then((response) => response.json())
      .then((response) => response.feed.entry)
      .then((response) => response.map((res) => getNumber(res.content.$t)))
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
  getAllList() {
    return fetch(this.link)
      .then((response) => response.json())
      .then((response) => response.feed.entry)
      .then((response) => response.map((res) => {
        const content = res.content.$t;
        const contentArray = content.split(', ');
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
      }));
  }
}

export default SelectFromSpreadsheet;
