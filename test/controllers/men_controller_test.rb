require 'test_helper'

class MenControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get men_update_url
    assert_response :success
  end

end
