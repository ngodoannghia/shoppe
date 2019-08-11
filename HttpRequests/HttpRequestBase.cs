using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace HttpRequests
{
    public interface IHttpRequestBase<T> where T: class
    {
        Task<List<T>> GetAll();
        T GetById(int id);
        void Post(T model);
        void Delete(int id);
        void Update(int id);
    }
    public abstract class HttpRequestBase<T> : IHttpRequestBase<T> where T : class
    {
        public HttpClient _client;
        private string _getAll;
        private string _getById;
        private string _post;
        private string _delete;
        private string _update;

        public HttpRequestBase(string getAll, string getById, string post, string delete, string update)
        {
            _getAll = getAll;
            _getById = getById;
            _post = post;
            _delete = delete;
            _update = update;
            _client = new HttpClient();
            _client.BaseAddress = new Uri("http://localhost:8080/");
            _client.DefaultRequestHeaders.Accept.Clear();
            _client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        }

        public void Delete(int id)
        {
        }

        public async Task<List<T>> GetAll()
        {
            List<T> result = null;
            var response = await _client.GetAsync(_getAll);

            if (response.IsSuccessStatusCode)
            {
                var kq = await response.Content.ReadAsStringAsync();
                result = JsonConvert.DeserializeObject<List<T>>(kq);
                Console.WriteLine("Success !!!!");
            }
            else
            {
                Console.WriteLine("Internal Server Error !");
            }

            return await Task.Run(() => result);
        }

        public T GetById(int id)
        {
            return null;
        }

        public void Post(T model)
        {
         
        }

        public void Update(int id)
        {
        }
    }
}
