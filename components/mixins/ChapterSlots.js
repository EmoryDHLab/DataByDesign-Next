import DocsRenderer from "~/components/docs-renderer/DocsRenderer.vue";

const ChapterSlots = {
  props: {
    docContent: Array,
  },
  // async fetch() {
  //   Object.entries(this.$options.staticData).forEach( ([key, value]) => {
  //     const obj = await this.$http.$get(`/api/data/${value}`);
  //
  //   })
  // },
  created() {
    this.$store.commit("currentChapter/initializeChapterState", {
      initialState: this.$options.chapterState,
    });
  },
  mounted() {},
  computed: {
    chapterState() {
      const obj = {};
      Object.keys(this.$options.chapterState).forEach((key) =>
        Object.defineProperty(obj, key, {
          get: () => this.$store.state.currentChapter.chapterState[key],
          set: (value) => {
            this.$store.commit("currentChapter/updateChapterState", {
              key,
              value,
            });
          },
          enumerable: true,
        })
      );
      return obj;
    },
  },
  components: {
    Slots: {
      render(createElement) {
        return createElement(DocsRenderer, {
          props: {
            docContent: this.$parent.docContent,
          },
          scopedSlots: this.$scopedSlots,
          on: this.$parent.$listeners,
        });
      },
    },
  },
};
export default ChapterSlots;
