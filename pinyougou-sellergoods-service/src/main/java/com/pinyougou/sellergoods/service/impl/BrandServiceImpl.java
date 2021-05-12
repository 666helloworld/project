package com.pinyougou.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.pinyougou.mapper.TbBrandMapper;
import com.pinyougou.pojo.*;
import com.pinyougou.pojo.TbBrandExample.*;

import com.pinyougou.sellergoods.service.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

@Service
public class BrandServiceImpl implements IBrandService {

    @Autowired
    private TbBrandMapper tbBrandMapper;

    @Override
    public List<TbBrand> findAll() {

        return tbBrandMapper.selectByExample(null);
    }

    @Override
    public PageResult findAllPage(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        Page<TbBrand> page = (Page<TbBrand>) tbBrandMapper.selectByExample(null);
        return new PageResult(page.getTotal(), page.getResult());
    }

    @Override
    public void add(TbBrand tbBrand) {
        tbBrandMapper.insert(tbBrand);
    }

    @Override
    public void delete(Long[] ids) {
        for (Long tmp : ids) {
            tbBrandMapper.deleteByPrimaryKey(tmp);
        }
    }

    @Override
    public Result update(TbBrand tbBrand) {
        int i = tbBrandMapper.updateByPrimaryKey(tbBrand);
        if (i > 0) {
            return new Result(true, "修改成功");
        } else {
            return new Result(false, "修改失败");
        }
    }

    @Override
    public TbBrand findOneById(long id) {
        return tbBrandMapper.selectByPrimaryKey(id);
    }

    @Override
    public PageResult findEntityPage(TbBrand tbBrand, int pageNum, int pageSize) {
        TbBrandExample tbBrandExample = new TbBrandExample();
        Criteria criteria = tbBrandExample.createCriteria();
        if (tbBrand != null) {
            if (tbBrand.getName() != null && !"".equals(tbBrand.getName())) {
                criteria.andNameLike("%" + tbBrand.getName() + "%");
            }

            if (tbBrand.getFirstChar() != null && !"".equals(tbBrand.getFirstChar())) {
                criteria.andFirstCharEqualTo(tbBrand.getFirstChar());
            }
        }
        PageHelper.startPage(pageNum, pageSize);
        Page<TbBrand> page = (Page<TbBrand>) tbBrandMapper.selectByExample(tbBrandExample);
        return new PageResult(page.getTotal(), page.getResult());
    }

    @Override
    public List<Map> getBrandList() {
        return tbBrandMapper.getBrandList();
    }


}
