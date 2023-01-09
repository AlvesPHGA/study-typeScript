type ValueTransition = Transition & { value: number };

function filterTransition(
   transition: Transition,
): transition is ValueTransition {
   return transition.value !== null;
}

export default class Statistic {
   private transition;
   total;

   constructor(transition: Transition[]) {
      this.transition = transition;
      this.total = this.transitionTotal();
   }

   private transitionTotal() {
      return this.transition.filter(filterTransition).reduce((acc, index) => {
         return acc + index.value;
      }, 0);
   }
}
