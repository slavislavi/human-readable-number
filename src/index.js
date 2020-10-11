module.exports = function toReadable (number) {
    
    const unit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dec = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

    const decimal = (number) => {
        let i = number.toString().split('');
        let result = dec[i[0]] + unit[i[1]];
        return result.trim();
    };
   
    const century = (number) => {
        let i = number.toString().split('');
        let result;
        if (i[1] != 1) {
            result = unit[i[0]] + ' hundred ' + dec[i[1]] + unit[i[2]];
        } else {
            result = unit[i[0]] + ' hundred ' + unit[+(i[1] + i[2])];
        };
        return result.trim();
    };
   
    if (number == 0) return 'zero';
    if (number < 20) return unit[number];
    if (number > 19 && number < 100) return decimal(number);
    if (number > 99 && number < 1000) return century(number);
};
