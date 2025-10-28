import vueCounterApp from "@/assets/projects/vue-counter-app.svg"
import checkWatch from "@/assets/projects/check-watch.svg"
import salaryCalculator from "@/assets/projects/salary-calculator.svg"
import taskManagement from "@/assets/projects/task-management.svg"
import eventBinding from "@/assets/projects/event-binding.svg"

const today = new Date().toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

export const projects = [
  {
    id: 1,
    title: 'Vue Counter App',
    description: 'Simple Vue counter app example.',
    createdAt: today,
    image: vueCounterApp,
    url: '/admin/project/vue-counter-app'
  },
  {
    id: 2,
    title: 'Check Watch & Computed Property',
    description: 'Example using watch and computed properties.',
    createdAt: today,
    image: checkWatch,
    url: '/admin/project/check-watch-computed'
  },
  {
    id: 3,
    title: 'Salary Calculator',
    description: 'Simple salary calculator using Vue.js and Pinia.',
    createdAt: today,
    image: salaryCalculator,
    url: '/admin/project/salary-calculator'
  },
  {
    id: 4,
    title: 'Task Management',
    description: 'Basic task management example.',
    createdAt: today,
    image: taskManagement,
    url: '/admin/project/task-management'
  },
  {
    id: 5,
    title: 'Event Handling & Two-way Binding',
    description: 'Demo of event handling and two-way data binding.',
    createdAt: today,
    image: eventBinding,
    url: '/admin/project/event-handling-binding'
  },
]
