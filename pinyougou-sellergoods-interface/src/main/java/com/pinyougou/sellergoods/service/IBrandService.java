package com.pinyougou.sellergoods.service;


import com.pinyougou.pojo.TbBrand;

import java.util.List;

/**
 * @author tchen
 * 品牌列表 -- 》 tb_brand
 * */
public interface IBrandService {

    public List<TbBrand> findAll();
}
