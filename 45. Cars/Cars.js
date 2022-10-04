function Cars(manufacture, model) {
        let other = Object.keys(this);
        other.splice(0, 8);
        let dataObj = {
          manufacture,
          model,
        };
        other.forEach((e) => {
          dataObj[e] = this[e];
        });
        return dataObj;
      }
      const car = Cars("Honda", 2013, (color = "Black"), (City = "Karachi"));
      console.log(car);