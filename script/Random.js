const Random = {
  nombre: (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
  },
  result: (
      length,
      { lower = true, upper = false, symbol = false, number = false } = {
          lower: true,
          upper: false,
          symbol: false,
          number: false
      }
  ) => {
      let _chars = "abcdfghijklmnopqrstuvwxyz";
      let _upper = "ABCDFGHIJKLMNOPQRSTUVWXYZ";
      let _symbols = "!#$%&@[]";
      let _numbers = "0123456789";

      let chars = (
          (lower ? _chars : "") +
          (upper ? _upper : "") +
          (symbol ? _symbols : "") +
          (number ? _numbers : "")
      ).split("");
      let str = "";

      for (let i = 0; i < length; i++) {
          str += Random.element(chars);
      }

      return str;
  },
  element: (list) => {
      return list?.[Random.nombre(0, list.length - 1)];
  }
};
