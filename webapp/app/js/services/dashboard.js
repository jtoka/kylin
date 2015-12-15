/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

KylinApp.factory('DashBoardService', ['$resource', function ($resource, config) {
    return $resource(Config.service.url + 'performance/:action', {}, {
//        avgCubeLatency: {method: 'GET', params: {action: 'avgCubeLatency'}, isArray: true},
        avgDayQuery: {method: 'GET', params: {action: 'avgDayQuery'}, isArray: true},
        dailyQueryCount: {method: 'GET', params: {action: 'dailyQueryCount'}, isArray: true},
        eachDayPercentile: {method: 'GET', params: {action: 'eachDayPercentile'}, isArray: true}, // last 30 day 90,95 percentile for each day
        projectPercentile: {method: 'GET', params: {action: 'projectPercentile'}, isArray: true}, // last 30 day 90,95 percentile for each project
        cubesStorage: {method: 'GET', params: {action: 'cubesStorage'}, isArray: true},
        last30DayPercentile: {method: 'GET', params: {action: 'last30DayPercentile'}, isArray: true},//90th percentile of last 30 day
        totalQueryUser: {method: 'GET', params: {action: 'totalQueryUser'}, isArray: true},
        listCubes: {method: 'GET', params: {action: 'listCubes'}, isArray: true}
    });
}])
;