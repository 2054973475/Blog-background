<template>
  <div class="blog-classify-analysis-chart__container">
    <div class="blog-classify-analysis-chart__header">标签文章数统计</div>
    <div ref="echarts" class="blog-classify-analysis-chart__content" />
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      myEcharts: null,
      resizeObserver: null
    };
  },
  watch: {
    data() {
      if (this.myEcharts === null) {
        this.init();
      } else {
        this.myEcharts.setOption({
          series: [
            {
              data: this.data
            }
          ]
        });
      }
    }
  },
  beforeDestroy() {
    this.resizeObserver.unobserve(this.$refs.echarts);
  },
  methods: {
    init() {
      const myEcharts = echarts.init(this.$refs.echarts);
      myEcharts.setOption({
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'center',
          top: 'bottom'
        },
        series: [
          {
            name: '分类文章数统计',
            type: 'pie',
            radius: '60%',
            data: this.data,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
      const resizeObserver = new ResizeObserver(() => {
        myEcharts.resize();
      });
      resizeObserver.observe(this.$refs.echarts);
      this.resizeObserver = resizeObserver;
      this.myEcharts = myEcharts;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-classify-analysis-chart {
  &__container {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 20px;
    border-radius: 10px;
  }
  &__header{
    border-bottom: 1px solid rgba(0,0,0,0.3);
    padding-top:0;
    padding-bottom: 10px;
    font-weight: bold;
    color:rgba(0,0,0,0.7)
  }
  &__content {
    flex: 1;
    width: 100%;
  }
}
</style>
