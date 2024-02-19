// proper case function (JScript 5.5+)
//https://www.codeproject.com/Articles/11009/Proper-Case-JavaScript-Function
export function toProperCase(s) {
  let result = s.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
    return $1.toUpperCase();
  });
  result = result.replace(/Vs/g, "vs");
  result = result.replace(/And/g, "and");
  return result;
}
