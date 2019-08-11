using HttpRequests.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HttpRequests.HttpRequest
{
    public interface ICategoryRequest:IHttpRequestBase<Category>
    {
    }
    public class CategoryRequest:HttpRequestBase<Category>,ICategoryRequest
    {
        public int id = 0;
        public string getAll = "category/list";

        public CategoryRequest() : base("category/list","","","","")
        {

        }

    }
}
