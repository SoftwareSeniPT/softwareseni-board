import React from 'react';
import SelectFromSpreadsheet from '../../utils/select-from-spreadsheet';
import BlockLists from '../../components/block-lists';
import PieChart from '../../components/pie-chart';
import ProgressList from '../../components/progress-list';

const spreadSheetData = new SelectFromSpreadsheet('https://spreadsheets.google.com/feeds/list/14O_iFOTejUj2S9q5Jjy9fZfdw2j0XZe2F-0q63z1q20/1/public/values?alt=json&gid=1164880424');

export default {
  name: 'Operation Board',
  components: [{
    columns: 3,
    blocks: [{
      title: 'Project Quality Leaderboard',
      type: 'free',
      component: (value) => <BlockLists value={value} />,
      resolver: () => spreadSheetData.selectSheet(1).getListHorizontal(),
    }],
  }, {
    columns: 2,
    blocks: [{
      title: 'Chart',
      type: 'long-horizontal',
      component: (value) => {
        const scoreLabels = ['S', 'A', 'B', 'C'];
        // Get average score
        const chartValue = value && value.map(val => {
          const scores = val[' previousweeksscore'];
          const scoreArray = scores
            .split(' ')
            .map((score) => {
              switch (score) {
                case 'S':
                  return 4;
                case 'A':
                  return 3;
                case 'B':
                  return 2;
                case 'C':
                  return 1;
                default:
                  return 0;
              }
            });
          const averageScore = scoreArray.reduce((acc, score) => acc + score, 0) / scoreArray.length;
          return {
            value: Number(averageScore.toFixed(2), 10),
            name: val.projectname,
            scores: scoreArray,
          };
        });

        const total = chartValue.reduce((acc, val) => (val.scores.length + acc), 0);

        const scoreMap = scoreLabels.map((score) => {
          const getLabel = (scoreNumber) => {
            switch (scoreNumber) {
              case 4:
                return 'S';
              case 3:
                return 'A';
              case 2:
                return 'B';
              case 1:
                return 'C';
              default:
                return 0;
            }
          };
          const scoreLength = chartValue.reduce((acc, val) => {
            const filterX = val.scores.filter((scoreX) => (getLabel(scoreX) === score));
            return acc + filterX.length;
          }, 0);

          return {
            name: score,
            value: Number(((scoreLength / total) * 100).toFixed(2)),
          };
        });

        return (
          <PieChart value={scoreMap} />
        );
      },
      resolver: () => spreadSheetData.selectSheet(1).getListHorizontal(),
    }, {
      title: 'Leaderboard',
      type: 'full-square',
      component: (value) => {
        // Get average score
        const chartValue = value && value.map((val) => {
          const scores = val[' previousweeksscore'];
          const scoreArray = scores
            .split(' ')
            .map((score) => {
              switch (score) {
                case 'S':
                  return 4;
                case 'A':
                  return 3;
                case 'B':
                  return 2;
                case 'C':
                  return 1;
                default:
                  return 0;
              }
            });
          const averageScore = scoreArray.reduce((acc, score) => acc + score, 0) / scoreArray.length;
          return {
            number: Number(averageScore.toFixed(2), 10),
            title: val.projectname,
          };
        });

        return (
          <ProgressList lists={chartValue} noRound />
        );
      },
      resolver: () => spreadSheetData.selectSheet(1).getListHorizontal(),
    }],
  }],
};
