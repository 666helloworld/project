package com.pinyougou.manager.controller;


import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.pojo.PageResult;
import com.pinyougou.pojo.Result;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.IBrandService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/brand")
public class BrandController {

     @Reference(timeout = 60000)
    private IBrandService brandService;

    @RequestMapping("/findAll")
    public List<TbBrand> findAll(){
        return brandService.findAll();
    }


    @RequestMapping("/findAllPage")
    public PageResult findAllPage(int page,int rows){

        return brandService.findAllPage(page,rows);
    }

    @RequestMapping("/add")
    public Result add(@RequestBody TbBrand tbBrand){
        try{
            brandService.add(tbBrand);
            return new Result(true,"添加成功");
        }catch (Exception e){
            e.printStackTrace();
            return new Result(false,"添加失败");
        }
    }

    @RequestMapping("/delete")
    public Result delete(Long[] ids){
        try{
            brandService.delete(ids);
            return new Result(true,"删除成功");
        }catch (Exception e){
            e.printStackTrace();
            return new Result(false,"删除失败");
        }
    }


    @RequestMapping("/update")
    public Result update(@RequestBody TbBrand tbBrand){
        try{
            return brandService.update(tbBrand);
        }catch (Exception e){
            e.printStackTrace();
            return new Result(false,"修改失败");
        }
    }


    @RequestMapping("/findOneById")
    public TbBrand findOneById(Long id){
        try{
            TbBrand oneById = brandService.findOneById(id);
            return oneById;
        }catch (Exception e){
            e.printStackTrace();
            return new TbBrand();
        }
    }

    @RequestMapping("/findEntityPage")
    public PageResult findEntityPage(@RequestBody TbBrand tb,int page,int rows){
        try{
            return brandService.findEntityPage(tb,page,rows);
        }catch (Exception e){
            e.printStackTrace();
            return new PageResult();
        }
    }

    @RequestMapping("getBrandList")
    public List<Map> getBrandList(){
        try{
            return brandService.getBrandList();
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

}
