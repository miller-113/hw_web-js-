//generator exmaple
const country = {
    values: ['ua', 'uk', 'pl', 'usa'],
    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                const value = this.values[i]
                i++
                return {
                    done: i > this.values.length,
                    value
                }
            }
        }
    }
}

for (let item of country) {
    console.log(item)
}

// iteration generator
function* gen(num) {
    for (let i = 0; i < num; i++) {
        yield i
    }
}

// const iter = gen(3)
for (let i of gen(5)) {
    console.log(i)
}

