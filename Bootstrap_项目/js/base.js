$(function(){
	
	$(function() {   /*折叠show*/
		$('#collapseTow').collapse('show');
	});
	
	
	/*fcm_jq begin*/
	
	/*修改*/
	var userList = [];
	var _this = null;
	$(document).on("click",".modification",function(){
		_this = $(this).parents("tr");
		userList = [];  
		$(this).parent().siblings().each(function(){  /*遍历数组*/
			userList.push($(this).text());
		})
		$("#myModal").find("input").each(function(i){  /*遍历val到input*/
			$(this).val(userList[i]);
		})
		
		
	})
	
	/*修改确定*/
	var changList = [];
	$(document).on("click",".sub",function(){
		changList = [];
		$(this).parents(".modal-content").find("input").each(function(){
			changList.push($(this).val());
		})
		_this.find("td").each(function(i){
			$(this).text(changList[i]);
		})
	})
	
	/*add_增加*/
	var addList = [];
	$(document).on("click",".add_ok",function(){
		$(this).parents(".modal-content").find("input").each(function(){
			addList.push($(this).val());
		})
		var str = '<tr><td>'+addList[0]+'</td><td>'+addList[1]+'</td><td>'+addList[2]+'</td><td><button class="btn btn-danger modification" data-toggle="modal" data-target="#myModal" ><i class="glyphicon glyphicon-pencil"></i> 修改</button></td></tr>';
		$(".table_fcm").append(str);
		
		/*清空val*/
		$(this).parents(".modal-content").find("input").each(function(){
			addList.push($(this).val(""));
		})
		addList = [];
		/*清空验证状态*/
		$(".form-horizontal input").parents(".form-group").removeClass("has-error has-success has-warning");
	})
	
	/*搜索*/
	$("#search_btn").click(function(){
		var oText = $("#search").val();
		if(oText==0){
			alert("搜素内容不能为空");
		}else{
			if($("table tr td:contains("+oText+")").length==0 ){
				alert("找不到数据");
			}else{
				$("table tr:not(:first)").hide();
				$("table tr:contains("+oText+")").show();
			}
		}
	})
	
	/*fcm_jq end*/
	
	
	/*fim_jq begin*/
	
	/*修改*/
	/*var _this_fim_sel = "";
	$("#myModal_change").find("#sel").change(function(){
		
	})*/
	
	var _this = null;
	var changeList = [];
	$(document).on("click",".change",function(){
		_this = $(this).parents("tr");
		changeList = [];   /*清空数组*/
		$(this).parent().siblings("td:not(:eq(1))").each(function(){  /*遍历获取当前tr的text值放到changeList数组*/
			changeList.push($(this).text());
		})
		$("#myModal_change").find("input").each(function(i){  /*将数组的数据遍历到各个input框里*/
			$(this).val(changeList[i]);
		})
		$("#sel").val();
	})
	
	/*修改确定*/
	var _this_sel = null  ;
	var change_ok_List = [];
	$(document).on("click",".change_ok",function(){
		change_ok_List = [];  /*清空数组*/
		_this_sel = $(this).parents().find("#sel").val()  /*获取当前select的值*/
		$(this).parents(".modal-content").find("input").each(function(){  /*获取input框的val()值*/
			change_ok_List.push($(this).val());
		})
		_this.find("td:not(:eq(1))").each(function(i){   /*将获取input的val()值遍历到tr下面*/
			$(this).text(change_ok_List[i]);
		})
		_this.find("td").eq(1).text(_this_sel);   /*将获取sle的val()值添加到tr下面的第二个td*/
	})
	
	/*下架*/
	var _this_tr = null
	$(document).on("click",".del",function(){
		if(confirm("确定下架吗？")){
			$(this).parents("tr").clone(true).appendTo(".look_ed");
			$(".look_ed").find(".up").show().siblings().hide();
			$(this).parents("tr").addClass("bg-danger");
			$(this).addClass("disabled");
		}
	})
	/*上架*/
	$(document).on("click",".up",function(){
		if(confirm("确定上架吗？")){
			$(".look_ing").find(".up").hide().siblings().show()
			$(".look_ing tr").removeClass("bg-danger ")
			$(".look_ing tr td button").removeClass("disabled ")
			$(this).parents("tr").remove()
		}
	})
	
	/*增加*/
	var fim_add = []
	$(document).on("click",".fim_add",function(){
		fim_add = []
		_this_sel = $(this).parents().find("#sel_1").val()   /*获取当前select的值*/
		$(this).parents(".modal-content").find("input").each(function(){  /*获取所有input框的val()值*/
			fim_add.push($(this).val())
		})
		/*字符串拼接*/
		var str = '<tr><td>'+fim_add[0]+'</td><td>'+_this_sel+'</td><td>'+fim_add[1]+'</td><td>'+fim_add[2]+'</td><td>'+fim_add[3]+'</td><td>'+fim_add[4]+'</td><td><button class="btn btn-info modification change" type="button" data-toggle = "modal" data-target = "#myModal_change"><i class="glyphicon glyphicon-pencil"></i> 修改</button> <button class="btn btn-danger modification del" type="button" ><i class="glyphicon glyphicon-eye-close"></i> 下架</button><button class="btn btn-success modification up" type="button" style="display: none;"><i class="glyphicon glyphicon-eye-open"></i> 上架</button></td></tr>'
		$(".table_fim").append(str)  /*添加字符串 str 到 table_fim*/
		
		/*清空val()*/
		$(this).parents(".modal-content").find("input").each(function(){  /*遍历清空input的val()值*/
			fim_add.push($(this).val(""))
		})
		fim_add = []
		$("#sel_1 option:eq(0)").attr("selected","selected")  /*sel回到默认值*/
		/*清空验证状态*/
		$(".form-horizontal input").parents(".form-group").removeClass("has-error has-success has-warning");
	})
	
	/*fim_jq end*/
	
	/*hm_jq  begin*/
	
	/*修改*/
	var hm_List = [] ;
	var _this_hm = null
	$(document).on("click",".hm_change",function(){
		hm_List = []  /*清空其他数据*/
		_this_hm = $(this).parents("tr");
		$(this).parent().siblings().each(function(){  /*通过遍历的方法获取当前tr的td的text值*/
			hm_List.push($(this).text())
		})
		$("#myModal_hm").find("input").each(function(i){  /*将遍历获取的text值,遍历添加到模态框下面对应的input框*/
			$(this).val(hm_List[i])
		})
	})
	 
	/*修改确定*/
	var hm_ok_List = []
	$(document).on("click",".hm_change_ok",function(){
		hm_ok_List = []  /*清空其他数据*/
		$(this).parents(".modal-content").find("input").each(function(){  /*遍历获取修改后的val()值*/
			hm_ok_List.push($(this).val())
		})
		_this_hm.find("td").each(function(i){  /*将遍历获取到的val()值添加到当前行的各个td*/
			$(this).text(hm_ok_List[i])
		})
		
	
	})
	
	/*增加*/
	var hm_add_List = []
	$(document).on("click",".hm_add",function(){
		hm_add_List = []  /*清空其他数据*/
		$(this).parents(".modal-content").find("input").each(function(){  /*遍历获取输入的val()值存放到hm_add_List数组*/
			hm_add_List.push($(this).val())
		})
		/*字符串拼接*/
		var str = '<tr><td>'+hm_add_List[0]+'</td><td>'+hm_add_List[1]+'</td><td>'+hm_add_List[2]+'</td><td><button type="button" class="btn btn-info hm_change modification" data-toggle="modal" data-target="#myModal_hm"><i class="glyphicon glyphicon-pencil"></i> 修改</button></td></tr>'
		$(".table_hm").append(str)
		
		/*清空val()*/
		$(this).parents(".modal-content").find("input").each(function(){  /*遍历清空input的val()值*/
			hm_add_List.push($(this).val(""));
		})
		hm_add_List = [] ;
		/*清空验证状态*/
		$(".form-horizontal input").parents(".form-group").removeClass("has-error has-success has-warning");
	})
	/*hm_jq  end*/
	
	
	/*staff_jq begin*/
	
	/*修改*/
	var sta_List = [];
	var _this_sta = null;
	$(document).on("click",".sta_change",function(){
		sta_List = [];
		_this_sta = $(this).parents("tr");
		$(this).parent().siblings("td:not(:eq(2))").each(function(){  
			sta_List.push($(this).text())
		})
		$("#myModal_sta").find("input:not([name=sex])").each(function(i){
			$(this).val(sta_List[i])
		})
		
		if($(this).parent().siblings("td:eq(2)").text()=='男'){
			$("input[type=radio]:eq(0)").prop("checked",true);
		}else{
			$("input[type=radio]:eq(1)").prop("checked",true);
		}
		
	})
	
	/*修改确定*/
	var sta_change_ok_List = [];
	$(document).on("click",".sta_change_ok",function(){
		sta_change_ok_List = [];
		$(this).parents(".modal-body").find("input:not([name=sex])").each(function(){
			sta_change_ok_List.push($(this).val());
		})
		_this_sta.find("td:not(:eq(2))").each(function(i){
			$(this).text(sta_change_ok_List[i]);
		})
		
		var _val_sta = $('input:radio[name="sex"]:checked').val();
		 if(_val_sta == ""){    /*判断是否选择*/
		 	return false   /*为空,返回false*/
		 }else{     /*否则将选中的val()值放到第三个td*/
		 	_this_sta.find("td:eq(2)").text(_val_sta);  
		 }
		 
	})
	
	/*增加*/
	var sta_add_List = [];
	$(document).on("click",".sta_add",function(){
		sta_add_List = [];
		$(this).parents(".modal-content").find("input:not([name=sex])").each(function(){
			sta_add_List.push($(this).val());
		})
		
		var _val_sta = $('input:radio[name="sex"]:checked').val();
		 if(_val_sta == ""){  
		 	alert("没选中");
		 	return false ;  
		 }
		 /*字符串拼接*/
		 var str = '<tr><td>'+sta_add_List[0]+'</td><td>'+sta_add_List[1]+'</td><td>'+_val_sta+'</td><td>'+sta_add_List[2]+'</td><td><button type="button" class="btn btn-info sta_change" data-toggle="modal" data-target="#myModal_sta"><i class="glyphicon glyphicon-pencil"></i> 修改</button></td></tr>';
		 $(".table_sta").append(str);
		 
		 /*清空val()*/
		$(this).parents(".modal-body").find("input:not([name=sex])").each(function(){
			sta_add_List.push($(this).val(""));
		})
		$('input:radio[name="sex"]:checked').removeAttr("checked");  /*清空checked*/
		/*清空验证状态*/
		$(".form-horizontal input").parents(".form-group").removeClass("has-error has-success has-warning");
	})
	
	/*staff_jq end*/
	
	
	/*show_jq begin*/
	
	/*修改*/
	
	/*获取修改的sel的val()值*/
	var _this_sel_f = "";
	var _this_sel_h = "";
	var _this_sel_r = "";
	$("#myModal_show_change").find("#sel_f").change(function(){  /*获取电影信息的val()值*/
		_this_sel_f = $(this).val(); 
	})	
	$("#myModal_show_change").find("#sel_h").change(function(){ /* 获取大厅信息的val()值*/
		_this_sel_h = $(this).val(); 
	})	
	$("#myModal_show_change").find("#sel_r").change(function(){   /*获取员工信息的val()值*/
		_this_sel_r = $(this).val(); 
	})	
	
	var show_change_List = [];
	var _this_show = null ;
	$(document).on("click",".show_change",function(){
		show_change_List = [];
		_this_show = $(this).parents("tr");
		$(this).parent().siblings("td:not(:gt(0):lt(3))").each(function(){
			show_change_List.push($(this).text());
		})
		$("#myModal_show_change").find("input").each(function(i){
			$(this).val(show_change_List[i]);
		})
		
	})
	
	/*修改确定*/
	var show_change_ok_List = [];
	$(document).on("click",".show_change_ok",function(){
		show_change_ok_List = [];
		$(this).parents(".modal-content").find("input").each(function(){
			show_change_ok_List.push($(this).val())
		})
		_this_show.find("td:not(:gt(0):lt(3))").each(function(i){
			$(this).text(show_change_ok_List[i])
		})
		_this_show.find("td:eq(1)").text(_this_sel_f);
		_this_show.find("td:eq(2)").text(_this_sel_h);
		_this_show.find("td:eq(3)").text(_this_sel_r);
		
	})
	
	/*删除*/
	$(document).on("click",".show_del",function(){
		if(confirm("确定删除吗？")){
			$(this).parents("tr").remove();
		}
	})
	
	/*增加*/
/*	获取增加的sel的val()值*/
	var _this_sel_f_1 = "";
	var _this_sel_h_1 = "";
	var _this_sel_r_1 = "";
	$("#myModal_show_add").find("#sel_f_1").change(function(){  /*获取电影信息的val()值*/
		_this_sel_f_1 = $(this).val(); 
	})	
	$("#myModal_show_add").find("#sel_h_1").change(function(){ /* 获取大厅信息的val()值*/
		_this_sel_h_1 = $(this).val(); 
	})	
	$("#myModal_show_add").find("#sel_r_1").change(function(){   /*获取员工信息的val()值*/
		_this_sel_r_1 = $(this).val(); 
	})	 
	

	var show_add_List = [];
	$(document).on("click",".show_add",function(){
		show_add_List = [];
		$(this).parents(".modal-content").find("input").each(function(){
			show_add_List.push($(this).val());
		})
		/*字符串拼接*/
		var str = '<tr><td>'+show_add_List[0]+'</td><td>'+_this_sel_f_1+'</td><td>'+_this_sel_h_1+'</td><td>'+_this_sel_r_1+'</td><td>'+show_add_List[1]+'</td><td>'+show_add_List[2]+'</td><td>'+show_add_List[3]+'</td><td><button class="btn btn-info modification show_change" type="button" id="alter" data-toggle = "modal" data-target = "#myModal_show_change"><i class="glyphicon glyphicon-pencil"></i> 修改</button><button class="btn btn-danger modification show_del" type="button" ><i class="glyphicon glyphicon-eye-close"></i> 删除</button></td></tr>'
		$(".table_show").append(str)
		
		/*清空val()值*/
		$(this).parents(".modal-content").find("input").each(function(){
			show_add_List.push($(this).val(""));
		})
		show_add_List = [];
		/*sel回到默认值*/
		$("#sel_f_1 option:eq(0)").attr("selected","selected")  
		$("#sel_h_1 option:eq(0)").attr("selected","selected")
		$("#sel_r_1 option:eq(0)").attr("selected","selected")
	})
	
	
	/*show_jq end*/
	
	/*sale begin*/
	
	/*增加*/
	
	/*获取sel的val()值*/
	var _this_sale_f = "" ;
	var _this_sale_h = "" ;
	$("#myModal_sale_add").find("#sale_sel_f").change(function(){  /*获取电影名称的sel的val()值*/
		_this_sale_f = $(this).val()
	})
	$("#myModal_sale_add").find("#sale_sel_h").change(function(){  /*获取大厅信息的sel的val()值*/
		_this_sale_h = $(this).val()
	})
	
	var sale_add_List = [] ;
	$(document).on("click",".sale_add",function(){
		sale_add_List = [];
		$(this).parents(".modal-content").find("input").each(function(i){
			sale_add_List.push($(this).val());
		})
		
		var _sale_times_begin_chk =  $('input:radio[name="times_begin"]:checked').val(); /*开始时间*/
		var _sale_times_end_chk =  $('input:radio[name="times_end"]:checked').val();  /*结束时间*/
		var _sale_num_chk =  $('input:checkbox:checked').val();  /*座位号*/
		
		/*字符串拼接*/
		var str = '<tr><td>'+sale_add_List[0]+'</td><td>'+_this_sale_f+'</td><td>'+_this_sale_h+'</td><td>'+_sale_times_begin_chk+'</td><td>'+_sale_times_end_chk+'</td><td>'+sale_add_List[5]+'￥</td><td>'+_sale_num_chk+'</td><td><button class="btn btn-danger sale_del"><i class="glyphicon glyphicon-eye-close"></i> 删除</button></td></tr>';
		$(".table_sale").append(str)
		
		
		/*清空val()*/
		$(this).parents(".modal-content").find("input:first").val("")
		$(this).parents(".modal-content").find("input:eq(5)").val("")
		/*清空选中的选项*/
		$('input:radio[name="times_begin"]:checked').removeAttr("checked");
		$('input:radio[name="times_end"]:checked').removeAttr("checked");
		$('input:checkbox:checked').removeAttr("checked");
		$(".form-horizontal input").parents(".form-group").removeClass("has-error has-success has-warning");
	});
	
	/*删除*/
	$(document).on("click",".sale_del",function(){
		if(confirm("确定删除吗？")){
			$(this).parents("tr").remove();
		}
	})
	
	/*sale end*/
	
	
	/*Ear begin*/
	/*查看收益*/
	var _this_Ear_price = "";
	var _this_Ear_num = "" ;
	var EarList = [];
	$(document).on("click",".Ear_check",function(){
		 EarList = [];
		 _this_Ear_price = $(this).parents("tr").find("td:eq(6) span").text();
		 _this_Ear_num = $(this).parents("tr").find("td:eq(7)").text();
		 $(this).parents("tr").find("td:gt(5):not(:last)").each(function(){
		 	EarList.push($(this).text());
		 });
		 $(".table_Ear_check tr:not(:first) td:not(:last)").each(function(i){
		 	$(this).text(EarList[i]);
		 });
		 var Ear_all = parseFloat(_this_Ear_price*_this_Ear_num);  /*票价*卖出数量*/
		 $(".table_Ear_check tr:eq(1) td:eq(2) span").text(Ear_all);  /*小计*/
		 $(".table_Ear_check tr:eq(2) span").text(Ear_all);   /*合计收益*/
	})
	
	/*Ear end*/
	
	/*退出登录  begin*/
	$(".exit").click(function(){
		if(confirm("确定退出登录吗？")){
			window.location.href = "login.html"
		}
	})
	
	/*退出登录  end*/
	
	
	/*表单验证*/
	$(".form-horizontal input").focus(function(){
		$(this).attr("placeholder","请输入内容");
		$(this).parents(".form-group").removeClass("has-error has-success");
	})
	$(".form-horizontal input").blur(function(){
		var fat = $(this).parents(".form-group");
		var input_val = $(this).val();
		if(input_val == "") {
			$(this).focus();
			$(fat).addClass("has-error").removeClass("has-warning has-success");
			$(this).attr("placeholder","输入内容不能为空");
		} else {
			$(fat).addClass("has-success").removeClass("has-warning has-error")	;
		}
	})
	
})