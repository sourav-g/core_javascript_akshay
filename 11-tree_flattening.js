let user = {
  name: "Sourav",
  address: {
    personal: {
      city: "Siliguri",
      area: "Deshbandhupara",
    },
    office: {
      city: "Hyderabad",
      area: {
        landmark: "HiTech City",
      },
      designations: [
        {
          level: "SE",
        },
        {
          level: "Manager",
        },
      ],
    },
  },
};

let flatObject = {};
function flattenObject(obj, trailingKey) {
  if (Object.keys(flatObject).length == 0) flatObject = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value == "object") {
      flattenObject(value, trailingKey + "_" + key);
    } else {
      flatObject[trailingKey + "_" + key] = value;
    }
  }
  return flatObject;
}

console.log(flattenObject(user, "user"));
