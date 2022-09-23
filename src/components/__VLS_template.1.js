export default (await import('vue')).defineComponent({
props: ['delay'],

data() {
return {
showblock: false
};
},
mounted() {
setTimeout(() => {
this.showblock = true;
console.log("this.delay", this.delay);
}, this.delay);
}
});
function __VLS_template() {
// @ts-ignore
[showblock];
return {};
}
