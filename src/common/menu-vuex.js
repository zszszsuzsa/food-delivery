export const menuState = {
	menu: []
};

export const menuMutations = {
	setMenu	(state, menu) {
		state.menu = menu;
	}
};

export const menuActions = {
	setMenu(context, dataArray) { context.commit('setMenu', dataArray);}
};