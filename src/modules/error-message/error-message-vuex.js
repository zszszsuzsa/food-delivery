import Vue from 'vue';
export const errorState = {
    hasError:{}
};

export const errorMutations = {
	setError(state, hasErrorObject) {
		let segment = hasErrorObject.segment;
		Vue.set(state.hasError,[segment],hasErrorObject);

	},
	clearErrors(state, hasErrorObject) {
		let segment = hasErrorObject.segment;
		state.hasError[segment] = {};
	}
};

export const errorActions = {
    clearErrors(state, hasErrorObject) {
		let segment = hasErrorObject.segment;
		state.hasError[segment] = {};
	},
    setError(context,{segment:segment, errorMessage:errorMessage,error:error}){
        context.commit('setError',{segment:segment, errorMessage:errorMessage, error:error});
    }
};

