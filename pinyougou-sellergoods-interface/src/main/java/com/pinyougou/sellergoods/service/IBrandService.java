package com.pinyougou.sellergoods.service;


import com.pinyougou.pojo.PageResult;
import com.pinyougou.pojo.Result;
import com.pinyougou.pojo.TbBrand;

import java.util.List;
import java.util.Map;

/**
 * @author tchen
 * 品牌列表 -- 》 tb_brand
 */
public interface IBrandService {

    public List<TbBrand> findAll();

    /**
     * 实现分页的查询
     *
     * @return
     */
    public PageResult findAllPage(int pageNum, int pageSize);

    /**
     * 增加
     */
    public void add(TbBrand tbBrand);

    /**
     * 根据ID删除
     */
    public void delete(Long[] ids);

    /**
     * 更新
     *
     * @return
     */
    public Result update(TbBrand tbBrand);

    /**
     * 修改时的数据回显  根据Id查数据
     */
    public TbBrand findOneById(long id);

    /**
     * 根据条件进行数据查询
     */
    public PageResult findEntityPage(TbBrand tbBrand, int pageNum, int pageSize);

    /**
     * 获取所有品牌列表 为了模板管理
     */
    public List<Map> getBrandList();
}
