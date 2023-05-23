const metals = [
  {
    name: "1084",
    type: "Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.8,
      manganese: 0.6,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200,
  },
  {
    name: "1075",
    type: "Carbon Steel",
    composition: {
      iron: 98,
      carbon: 0.7,
      manganese: 0.4,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200,
  },
  {
    name: "80CrV2",
    type: "Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.75,
      chrome: 0.4,
      molybdenium: 0.1,
      vanadium: 0.15,
      manganese: 0.3,
      phosphorus: 0.025,
      sulfur: 0.025,
    },
    forging_min_temp: 850,
    forging_max_temp: 1100,
  },
  {
    name: "S30V",
    type: "Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.015,
      chromium: 0.14,
      molybdenium: 0.2,
      vanadium: 0.4,
    },
    forging_min_temp: 975,
    forging_max_temp: 1200,
  },
  {
    name: "420HC",
    type: "Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.004,
      nickel: 0.5,
      silicon: 0.6,
      chromium: 0.12,
      manganese: 0.01,
    },
    forging_min_temp: 1050,
    forging_max_temp: 1200,
  },
];

// question 1:
const q1 = function () {
  const newArr = [];
  for (let i = 0; i < metals.length; i++) {
    newArr.push(metals[i].name);
  }
  return newArr;
};

// question 2:
const q2 = function () {
  const newArr = [];
  for (let i = 0; i < metals.length; i++) {
    newArr.push(`${metals[i].name} ${metals[i].type}`);
  }
  return newArr;
};

//  question 3:
const q3 = function () {
  const newObj = {};
  for (let i = 0; i < metals.length; i++) {
    const { name, type } = metals[i];
    newObj[name] = type;
  }
  return newObj;
};

// question 4:
const q4 = function () {
  const sortedMetals = metals
    .sort(
      (metalA, metalB) => metalB.composition.carbon - metalA.composition.carbon
    )
    .map((metal) => metal.name);

  return sortedMetals;
};

// question 5:
const q5 = function () {
  const elements = {};

  for (let i = 0; i < metals.length; i++) {
    const composition = metals[i].composition;
    const compositionKeys = Object.keys(composition);
  
    for (let j = 0; j < compositionKeys.length; j++) {
      const element = compositionKeys[j];
      if (elements[element]) {
        elements[element].sum += composition[element];
        elements[element].count += 1;
      } else {
        elements[element] = {
          sum: composition[element],
          count: 1,
        };
      }
    }
  }
  
  const averageConcentrations = {};
  const elementKeys = Object.keys(elements);
  for (let i = 0; i < elementKeys.length; i++) {
    const element = elementKeys[i];
    averageConcentrations[element] = elements[element].sum / elements[element].count;
  }
  
  console.log(averageConcentrations);
}

q5();
