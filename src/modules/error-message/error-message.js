import { mapState} from 'vuex';

export default {
	computed:{
		...mapState('error', ['hasError'])
		},
	methods:{
		onRetry(error){
			this.$emit('on-retry',{action: error.action, params: error.params})
		}
	}
}
