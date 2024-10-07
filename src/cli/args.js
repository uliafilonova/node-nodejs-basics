const parseArgs = () => {
    const result = process.argv.reduce((acc, val, i, arr) => {
        if (val.startsWith('--')) {
            acc.push(`${val.slice(2)} is ${arr[i + 1]}`);
        }
        return acc
    }, []).join('; ')
    console.log(result);

    //console.log(process.argv.slice(2))
};

parseArgs();