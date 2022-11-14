import './PInput.scss';
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'PInput',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const inputEl = h('input', { id: props.id, placeholder: 'asdasdasd' });
    return () => inputEl;
  },
});
