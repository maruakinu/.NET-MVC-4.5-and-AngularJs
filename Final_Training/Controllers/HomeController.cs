using Final_Training.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Final_Training.Controllers
{
    public class HomeController : Controller
    {

        public JsonResult GetEmployee()
        {
            using (LearningDbEntities db = new LearningDbEntities())
            {
                List<Employee> empList = db.Employees.ToList();
                return Json(empList, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult Insert(Employee employee)
        {
            if (employee != null)
            {
                Console.WriteLine(employee);
                using (LearningDbEntities db = new LearningDbEntities())
                {
                    db.Employees.Add(employee);
                    db.SaveChanges();
                    return Json(new
                    {
                        success = true
                    });
                }
            }else
            {
                return Json(new
                {
                    success = false
                });
            }
        }

        //POST Employee/Update     
        [HttpPost]
        public JsonResult Update(Employee updatedEmployee)
        {
            using (LearningDbEntities db = new LearningDbEntities())
            {
                Employee existingEmployee = db.Employees.Find(updatedEmployee.EmpID);
                if (existingEmployee == null)
                {
                    return Json(new { success = false });
                }
                else
                {
                    existingEmployee.EmpName = updatedEmployee.EmpName;
                    existingEmployee.DeptName = updatedEmployee.DeptName;
                    existingEmployee.Email = updatedEmployee.Email;
                    existingEmployee.Designation = updatedEmployee.Designation;
                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        //POST Home/Delete/1
        [HttpPost]
        public JsonResult Delete(int id)
        {
            using (LearningDbEntities db = new LearningDbEntities())
            {
                Employee employee = db.Employees.Find(id);
                if (employee == null)
                {
                    return Json(new { success = false });
                }
                db.Employees.Remove(employee);
                db.SaveChanges();
                return Json(new { success = true });
            }
        }


        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}