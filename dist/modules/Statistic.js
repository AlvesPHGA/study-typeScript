function filterTransition(transition) {
    return transition.value !== null;
}
export default class Statistic {
    transition;
    total;
    constructor(transition) {
        this.transition = transition;
        this.total = this.transitionTotal();
    }
    transitionTotal() {
        return this.transition.filter(filterTransition).reduce((acc, index) => {
            return acc + index.value;
        }, 0);
    }
}
//# sourceMappingURL=Statistic.js.map