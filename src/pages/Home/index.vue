<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav";
import ListContainer from "@/components/ListContainer";
import TodayRecommend from "@/components/TodayRecommend";
import Rank from "@/components/Rank";
import Like from "@/components/Like";
import Floor from "@/components/Floor";
import Brand from "@/components/Brand";
export default {
  name: "Home",
  components: {
    TypeNav,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style lang="less" scoped>
</style>
