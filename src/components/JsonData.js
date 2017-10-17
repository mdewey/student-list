const KEYS = {
    STUDENT_DATA: "student-data"
}

const getData = (callback, errCallback) => {
    const _key = KEYS.STUDENT_DATA;
    const _data = localStorage.getItem(_key);
    if (_data) {
        callback(JSON.parse(_data));
    } else {
        fetch('/data/students.json')
            .then(resp => resp.json())
            .then((items) => {
                localStorage.setItem(_key, JSON.stringify(items))
                callback(items)

            })
    }
}

const reset = () => {
    localStorage.clear()
}
export default {
    getData,
    reset
};