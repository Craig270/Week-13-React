//method -> obj
const video = {
  title: "a",
  tages: ["a", "b", "c"],
  showTags() {
    this.tages.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTags();
