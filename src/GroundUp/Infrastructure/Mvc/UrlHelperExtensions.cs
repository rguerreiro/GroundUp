using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GroundUp.Infrastructure.Mvc
{
    public static class UrlHelperExtensions
    {
        public static string SinglePageAction(this UrlHelper urlHelper, string actionName)
        {
            return "/#" + urlHelper.Action(actionName);
        }
        public static string SinglePageAction(this UrlHelper urlHelper, string actionName, string controllerName)
        {
            return "/#" + urlHelper.Action(actionName, controllerName);
        }
        public static string SinglePageAction(this UrlHelper urlHelper, string actionName, string controllerName, object routeValues)
        {
            return "/#" + urlHelper.Action(actionName, controllerName, routeValues);
        }
    }
}