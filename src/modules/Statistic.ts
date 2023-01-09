import countBy from './countBy.js';

type ValueTransition = Transition & { value: number };

function filterTransition(
   transition: Transition,
): transition is ValueTransition {
   return transition.value !== null;
}

export default class Statistic {
   private transition;
   total;
   payment;
   status;

   constructor(transition: Transition[]) {
      this.transition = transition;
      this.total = this.transitionTotal();
      this.payment = this.formPayment();
      this.status = this.statusPayment();
   }

   private transitionTotal() {
      return this.transition.filter(filterTransition).reduce((acc, index) => {
         return acc + index.value;
      }, 0);
   }

   private formPayment() {
      return countBy(this.transition.map(({ formPaiment }) => formPaiment));
   }

   private statusPayment() {
      return countBy(this.transition.map(({ status }) => status));
   }
}
