package com.pinyougou.pojo;

import java.io.Serializable;
import java.util.List;

public class Goods implements Serializable {


    private TbGoods goods; //spu

    private TbGoodsDesc goodsDesc; //描述性的内容

    private List<TbItem> itemList; //sku

    public TbGoods getGoods() {
        return goods;
    }

    public void setGoods(TbGoods goods) {
        this.goods = goods;
    }

    public TbGoodsDesc getGoodsDesc() {
        return goodsDesc;
    }

    public void setGoodsDesc(TbGoodsDesc goodsDesc) {
        this.goodsDesc = goodsDesc;
    }

    public List<TbItem> getItemList() {
        return itemList;
    }

    public void setItemList(List<TbItem> itemList) {
        this.itemList = itemList;
    }
}
