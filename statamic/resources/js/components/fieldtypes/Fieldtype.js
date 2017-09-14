export default {

    props: ['data', 'config', 'name'],

    data() {
        return {
            autoBindChangeWatcher: true,
            changeWatcherIsBound: false
        };
    },

    ready() {
        if (this.autoBindChangeWatcher) {
            this.bindChangeWatcher();
        }
    },

    methods: {

        bindChangeWatcher() {
            if (this.changeWatcherIsBound) return;

            this.$watch('data', function () {
                this.$dispatch('changesMade', true);
            }, { deep: true });

            this.changeWatcherIsBound = true;
        }

    }

};
