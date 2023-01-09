import countBy from './countBy.js';
function filterTransition(transition) {
    return transition.value !== null;
}
export default class Statistic {
    transition;
    total;
    payment;
    status;
    constructor(transition) {
        this.transition = transition;
        this.total = this.transitionTotal();
        this.payment = this.formPayment();
        this.status = this.statusPayment();
    }
    transitionTotal() {
        return this.transition.filter(filterTransition).reduce((acc, index) => {
            return acc + index.value;
        }, 0);
    }
    formPayment() {
        return countBy(this.transition.map(({ formPaiment }) => formPaiment));
    }
    statusPayment() {
        return countBy(this.transition.map(({ status }) => status));
    }
}
//# sourceMappingURL=Statistic.js.map