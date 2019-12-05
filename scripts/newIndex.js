console.log("HelloWorld!");

function isSevere(item) {
    if (item.severity >= 4) {
        return true;
    } else {
        return false;
    }
}

function parseCases(object) {
    for (let item of object.cases) {
        console.log(item);
    }
}
